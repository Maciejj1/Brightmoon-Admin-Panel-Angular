import { Component, OnInit } from '@angular/core';
import { Client } from './Clients/Client';
import { ClientsService } from '../shared/clients.service';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  plus = 'assets/images/plus-icon.png';
  ngOnInit(): void {
    this.getAllClients();
  }
  display = false;
  displayModal() {
    this.display = true;
  }
  clientList: Client[] = [];
  clientObj: Client = {
    id: '',
    name: '',
    surname: '',
    email: '',
    tel: '',
  };
  id: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  tel: string = '';

  constructor(private clients: ClientsService, public model: ModalService) {}
  getAllClients() {
    this.clients.getAllClients().subscribe((res) => {
      this.clientList = res.map((e: any) => {
        const clients = e.payload.doc.data();
        clients.id = e.payload.doc.id;
        return clients;
      });
    });
  }

  removeClient(clients: ClientsService) {}
  addClient() {
    if (
      this.id == '' ||
      this.name == '' ||
      this.surname == '' ||
      this.email == '' ||
      this.tel == ''
    ) {
      alert('Please , fill the inputs');
      return;
    }
    this.clientObj.id = '';
    this.clientObj.name = this.name;
    this.clientObj.surname = this.surname;
    this.clientObj.email = this.email;
    this.clientObj.tel = this.tel;
  }
}
