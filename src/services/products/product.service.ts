import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, doc, setDoc, getDoc, collectionData, deleteDoc, query, where } from '@angular/fire/firestore';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _Firestore = inject(Firestore);
  private readonly productsRef = collection(this._Firestore, 'products');

  // ================= CREATE =================
  addProduct(product: any): Observable<any> {
    const id = doc(collection(this._Firestore, 'products')).id;

    return from(
      setDoc(doc(this._Firestore, 'products', id), {
        ...product,
        id
      })
    );
  }

  // ================= GET ALL =================
  getAllProducts(): Observable<any[]> {
    return collectionData(this.productsRef, { idField: 'id' });
  }

  // ================= GET By Brand =================
  getProductsByBrand(brand: string): Observable<any[]> {
    const brandQuery = query(
      this.productsRef,
      where('brand', '==', brand)
    );

    return collectionData(brandQuery, { idField: 'id' }) as Observable<any[]>;
  }

  // ================= GET By Brand =================
  getProductsByCategory(category: string): Observable<any[]> {
    const categoryQuery = query(
      this.productsRef,
      where('category', '==', category)
    );

    return collectionData(categoryQuery, { idField: 'id' }) as Observable<any[]>;
  }

  // ================= GET BY ID =================
  getProductById(id: string): Observable<any> {
    const productDoc = doc(this._Firestore, 'products', id);

    return from(getDoc(productDoc)).pipe(
      // تحويل doc snapshot إلى data
      (source$) =>
        new Observable((observer) => {
          source$.subscribe({
            next: (snap) => {
              if (snap.exists()) {
                observer.next({
                  id: snap.id,
                  ...snap.data()
                });
              } else {
                observer.next(null);
              }
              observer.complete();
            },
            error: (err) => observer.error(err)
          });
        })
    );
  }

  // ================= UPDATE =================
  updateProduct(id: string, data: any): Observable<any> {
    const productDoc = doc(this._Firestore, 'products', id);

    return from(updateDoc(productDoc, data));
  }

  // ================= DELETE =================
  deleteProduct(id: string): Observable<any> {
    const productDoc = doc(this._Firestore, 'products', id);

    return from(deleteDoc(productDoc));
  }
}
