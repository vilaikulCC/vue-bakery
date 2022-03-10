<template>
  <v-container>
    <div class="section-head">
      <h1><i class="fas fa-bread-slice"></i> Dashboard</h1>
    </div>
    <v-data-table
      :headers="headers"
      :items="bakeryList"
      :loading="loading"
      sort-by="id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>รายการสินค้า</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="2"
                plain
                class="btn-primary"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
              >
                <i class="fas fa-plus"></i> เพิ่มสินค้า
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <span>ชื่อสินค้า</span>
                      <v-text-field
                        v-model="editedItem.name"
                        label="ชื่อสินค้า"
                        solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <span>ราคาต้นทุน</span>
                      <v-text-field
                        v-model="editedItem.price"
                        label="ราคาต้นทุน"
                        solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <span>ราคาขาย</span>
                      <v-text-field
                        v-model="editedItem.selling_price"
                        label="ราคาขาย"
                        solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <span>สถานะ</span>
                      <v-text-field
                        v-model="editedItem.status"
                        label="สถานะ"
                        solo
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <span>หน่วย</span>
                      <v-select
                        v-model="editedItem.unit"
                        :items="unitList"
                        label="หน่วย"
                        solo
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <!-- Action -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn class="mr-2" @click="editItem(item)" >
          <i class="fas fa-pen"></i>
        </v-btn>
        <v-btn @click="deleteItem(item)">
          <i class="fas fa-trash-alt"></i>
        </v-btn>
        <!-- <v-icon small class="mr-2" @click="editItem(item)">
            <i class="fas fa-pen"></i>
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            <i class="fas fa-trash-alt"></i>
          </v-icon> -->
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Refresh </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Bakery } from "@/interface";
import { db } from "../../db";

@Component({
  watch: {
    dialog(val) {
      val || close();
    },
    dialogDelete(val) {
      // val || closeDelete();
      val;
    },
  },
})
export default class Dashboard extends Vue {
  dialog = false;
  dialogDelete = false;
  headers = [
    {
      text: "ชื่อสินค้า",
      align: "start",
      sortable: false,
      value: "name",
    },
    { text: "ราคาต้นทุน", value: "price" },
    { text: "ราคาขาย", value: "selling_price" },
    { text: "สถานะ", value: "status" },
    { text: "หน่วย", value: "unit" },
    { text: "Actions", value: "actions", sortable: false },
  ];
  bakeryList = [];
  editedIndex = -1;
  editedItem: Bakery = {
    id: "",
    name: "",
    price: 0,
    selling_price: 0,
    status: 0,
    unit: "แพ็ค",
  };
  defaultItem: Bakery = {
    id: "",
    name: "",
    price: 0,
    selling_price: 0,
    status: 0,
    unit: "แพ็ค",
  };
  loading = false;
  unitList = ["แพ็ค", "กล่อง"];
  checkStatus: Array<string> = ["0", "1", "2", "3"];

  created() {
    this.getBakeryList(this.checkStatus);
  }

  getBakeryList(status: Array<string>) {
    this.loading = true;
    db.collection("bakery")
      .where("status", "in", status)
      .get()
      .then((querySnapshot) => {
        this.bakeryList = Object.assign(
          querySnapshot.docs.map((doc) => doc.data())
        );
        console.table(this.bakeryList);

        this.loading = false;
      });
  }
  get formTitle() {
    return this.editedIndex === -1 ? "New Item" : "Edit Item";
  }

  editItem(item: Bakery) {
    console.log(item.id);
    this.editedIndex = this.bakeryList.findIndex(i => i === item);
    console.log(this.editedIndex)
    this.editedItem = Object.assign({}, item);
    this.dialog = true;
  }

  deleteItem(item: Bakery) {
    // this.editedIndex = this.bakeryList.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  }

  deleteItemConfirm() {
    this.bakeryList.splice(this.editedIndex, 1);
    this.closeDelete();
  }

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  closeDelete() {
    this.dialogDelete = false;
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    });
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.bakeryList[this.editedIndex], this.editedItem);
      console.log(this.editedIndex);
    } else {
      console.log(this.editedIndex);
      db.collection("bakery")
        .add({ ...this.editedItem })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((err) => {
          console.log("Error : " + err);
        });

      // Object.assign(this.bakeryList[this.editedIndex], this.editedItem);
      // this.bakeryList.push(this.editedItem);
    }
    this.close();
  }
}
</script>

<style lang="sass" scoped></style>
