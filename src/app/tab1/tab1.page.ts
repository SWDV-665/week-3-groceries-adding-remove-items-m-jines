import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 1
    },
    {
      name: "Bananas",
      quantity: 6
    },
    {
      name: "Bread",
      quantity: 2
    },
  ];
  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  async removeItem(item: any, index: any) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Item at index  '+ index + ' was removed successfully.',
      duration: 3000
    });
    (await toast).present();
    this.items.splice(index,1);
  }
    async addItem(){
    console.log("Adding Item");
    this.showAddItemPrompt();
  }
    async showAddItemPrompt() {
      const prompt = await this.alertCtrl.create({
        header:'Add Item',
        message: "Enter an item and quantity: ",
        inputs: [
          {
            name: 'name',
            placeholder: 'Name',
          },
          {
            name: 'quantity',
            placeholder: "Quantity"
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel Clicked', data);
            }
          },
          {
            text: 'save',
            handler: item => {
              console.log('Save Clicked', item);
              this.items.push(item);
            }
          }
        ]
      });
      await prompt.present();
    }
}

