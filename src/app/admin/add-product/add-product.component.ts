import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/products/product.service';
import { BrandService } from '../../../services/brand/brand.service';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})

export class AddProductComponent {
  private readonly _ProductService = inject(ProductService)
  private readonly _BrandService = inject(BrandService)
  private readonly _CategoryService = inject(CategoryService)

  productForm: FormGroup;
  mainImageFile!: File;
  imagesFiles: File[] = [];
  brands: any[] = [];
  categories: any[] = [];

  phone:string = ''

  ngOnInit(): void {
    this.getBrands();
    this.getCategoies();
  }

  getBrands(): void {
    this._BrandService.getAllBrands().subscribe(res => {
      this.brands = res;
    });
  }

  getCategoies(): void {
    this._CategoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],

      price: [0, Validators.required],
      discount: [0],
      stock: [0, Validators.required],
      rate: [0],

      details: this.fb.array([]),
      specifications: this.fb.array([]),
    });

    this.addDetail();
    this.addSpecification();
  }

  // ================= FILES =================

  onMainImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) this.mainImageFile = file;
  }

  onImagesChange(event: any): void {
    const files = event.target.files;
    this.imagesFiles = Array.from(files);
  }

  removeImage(index: number): void {
    this.imagesFiles.splice(index, 1);
  }

  // ================= FORM ARRAYS =================

  get details(): FormArray {
    return this.productForm.get('details') as FormArray;
  }

  addDetail(): void {
    this.details.push(this.fb.control(''));
  }

  get specifications(): FormArray {
    return this.productForm.get('specifications') as FormArray;
  }

  addSpecification(): void {
    this.specifications.push(this.fb.control(''));
  }

  // ================= CLOUDINARY =================

  uploadImage(file: File): Promise<string> {

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'glamify_upload');

    return fetch(
      'https://api.cloudinary.com/v1_1/glamify/image/upload',
      {
        method: 'POST',
        body: formData
      }
    )
      .then(res => res.json())
      .then(data => data.secure_url);

  }

  // ================= SUBMIT =================
  async submit(): Promise<void> {

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    try {

      // MAIN IMAGE
      const mainImageUrl = await this.uploadImage(this.mainImageFile);

      // MULTIPLE IMAGES
      const imagesUrls = await Promise.all(
        this.imagesFiles.map(file =>
          this.uploadImage(file)
        )
      );

      // FINAL DATA
      const data = {
        ...this.productForm.value,
        image: mainImageUrl,
        images: imagesUrls,
        createdAt: new Date()
      };

      console.log(data)

      // SAVE TO FIREBASE
      this._ProductService.addProduct(data).subscribe({
        next: (res) => {
          console.log('Product Added:', res);
          this.productForm.reset();
          this.imagesFiles = [];
        },
        error: (err) => {
          console.log('Error:', err);
        }
      });

    }

    catch (error) {
      console.log('Upload Error:', error);
    }

  }

}
