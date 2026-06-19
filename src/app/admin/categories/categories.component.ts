import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categoryForm: FormGroup;
  categories: any[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {

    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });

  }

  ngOnInit(): void {
    this.getCategories();
  }

  // ================= ADD =================
  submit(): void {

    if (this.categoryForm.invalid) return;

    this.isLoading = true;

    this.categoryService.addCategory(this.categoryForm.value.name).subscribe({
      next: () => {
        this.categoryForm.reset();
        this.isLoading = false;
        this.getCategories();
      },
      error: () => this.isLoading = false
    });

  }

  // ================= GET ALL =================
  getCategories(): void {
    this.categoryService.getAllCategories().subscribe((res:any) => {
      this.categories = res;
    });
  }

  // ================= DELETE =================
  deleteCategory(id: string): void {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {

        this.categoryService.deleteCategory(id).subscribe({
          next: () => {

            this.categories = this.categories.filter(c => c.id !== id);

            Swal.fire({
              title: "Deleted!",
              text: "Category has been deleted.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false
            });

          }
        });

      }

    });

  }

  // ================= UPDATE =================
  updateCategory(category: any): void {

    Swal.fire({
      title: 'Edit Category',
      input: 'text',
      inputValue: category.name,
      showCancelButton: true,
      confirmButtonText: 'Update',
      inputValidator: (value) => {
        if (!value) return 'Category name is required!';
        return null;
      }
    }).then((result) => {

      if (result.isConfirmed) {

        const newName = result.value;

        this.categoryService.updateCategory(category.id, newName).subscribe({
          next: () => {

            this.categories = this.categories.map(c =>
              c.id === category.id ? { ...c, name: newName } : c
            );

            Swal.fire({
              title: 'Updated!',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });

          }
        });

      }

    });

  }
}
