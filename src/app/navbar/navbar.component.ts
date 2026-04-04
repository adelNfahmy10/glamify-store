import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { CartService } from '../../services/cart/cart.service';
import { DataService, Product } from '../../services/data/data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, TranslatePipe, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _DataService = inject(DataService)
  private readonly _TranslateService = inject(TranslateService)
  private readonly _Router = inject(Router)
  private readonly _CartService = inject(CartService)
  private readonly _ToastrService = inject(ToastrService)

  cartCount = this._CartService.cartSignal;
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  navbarWidth:string = '100%'
  navbarTop:string = '0'
  background:string = 'transparent'
  searchWord:string = ''
  lastScrollTop = 0;
  isNavbarVisible = true;
  lang: string =  'en';

  ngOnInit(): void {
    this._TranslateService.use(this.lang);
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this.updateHtmlAttributes();
    }
    this.allProducts = this._DataService.getAllProducts();
    this.filteredProducts = this.allProducts;
  }

  onSearch() {
    const value = this.searchWord.trim().toLowerCase();

    // لو فاضي رجع كل المنتجات
    if (!value) {
      this.filteredProducts = this.allProducts;
      return;
    }

    this.filteredProducts = this.allProducts.filter(product =>
      product.name?.toLowerCase().includes(value) ||
      product.brand?.toLowerCase().includes(value)
    );

    console.log(this.filteredProducts);

  }

  goToProduct(id:any) {
    this._Router.navigate(['/product-details/', id]);
    this.searchWord = '';
  }

  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    if (scrollPosition > this.lastScrollTop) {
      if(this.lastScrollTop > 200){
        this.navbarTop = '-100px';
      }
    } else {
      if(this.lastScrollTop > 200){
        this.navbarTop = '0';
      } else {
        this.navbarTop = '0';
      }
    }

    this.lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
  }

  sections = [
    { id: 'home', name: 'navbar.home' },
    { id: 'about', name: 'navbar.about' },
    { id: 'why-us', name: 'navbar.whyUs' },
    { id: 'feature', name: 'navbar.features' },
    { id: 'how-it-work', name: 'navbar.how-it-work' },
    { id: 'event-types', name: 'navbar.event-types' },
    { id: 'pricing', name: 'navbar.pricing' },
    { id: 'faq', name: 'navbar.faq' },
    { id: 'contact-us', name: 'navbar.contact-us' },
  ];
  activeLink: string = 'home';

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    }
  }

  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeLink = entry.target.id;
            }
          });
        },
        { threshold: 0.5 }
      );

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }
  }

  // Translation Code
  switchLang() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.lang);
    this._TranslateService.use(this.lang);
    this.updateHtmlAttributes();
  }

  updateHtmlAttributes() {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('dir', this.lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', this.lang);
  }

  // Form Product Request
  productRequestForm:FormGroup = this._FormBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    productName: ['', Validators.required],
    brand: ['', Validators.required]
  })

  isLoading: boolean = false;
  submitProductRequest(): void {
    if (this.productRequestForm.invalid) return;

    let data = this.productRequestForm.value;

    this.isLoading = true; // 🔥 هنا بنقفل الزرار

    let formData = new FormData();
    formData.append('Name', data.name);
    formData.append('Phone', data.phone);
    formData.append('Product', data.productName);
    formData.append('Brand', data.brand);
    formData.append('Date', new Date().toISOString());


    this._CartService.productRequset(formData).subscribe({
      next: () => {
        this._ToastrService.success('Order submitted successfully!', 'Success');
        this.productRequestForm.reset();
      },
      error: () => {
        this._ToastrService.error('Failed to submit order.', 'Error');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}
