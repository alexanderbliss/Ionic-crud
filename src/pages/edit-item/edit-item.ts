import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shoping-list/shoping-list.service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
  item: Item;

  constructor(public navCtrl: NavController,
              public navParams: NavParams , 
              private shopping: ShoppingListService,
              private toast: ToastService,
            ) {}

  ionViewWillLoad(item:Item) {
    console.log(this.navParams.get('item'));
    
    this.item = this.navParams.get('item');
  }
saveItem(item:Item){
  console.log(item);
  this.toast.show(`${item.name} saved!`)
  this.shopping.editItem(item).then(() => {
    this.navCtrl.setRoot('HomePage')
  })
}

removeItem(item:Item){
  this.shopping.removeItem(item).then(()=>{
    this.toast.show(`${item.name} deleted`)
    this.navCtrl.setRoot('HomePage')

  })
}
}
