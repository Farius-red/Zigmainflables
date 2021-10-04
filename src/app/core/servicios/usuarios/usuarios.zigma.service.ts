import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { UsuariosZigma } from 'src/app/core/modelos/usuariosZig/usuariosZigma.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosServiceZigma {
  private usuariosCollection: AngularFirestoreCollection<UsuariosZigma>;
  usuarios: Observable<UsuariosZigma[]>;


  constructor(private afs: AngularFirestore) {
    this.usuariosCollection = afs.collection<UsuariosZigma>('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as UsuariosZigma;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  // tslint:disable-next-line:typedef
  listarUsuario() {
    return this.usuarios;
  }
}
