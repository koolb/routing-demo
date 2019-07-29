import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You selected dept with id {{deptId}}
    </h3>
    <p> 
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <button (click)="goPrev()"> Prev </button>
    <button (click)="goNext()"> Next </button>
    <div> 
      <button (click)="goDepts()"> Back </button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public deptId = 0;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    //let id = +this._route.snapshot.paramMap.get('id')
    this._route.paramMap.subscribe((params: ParamMap) => {
      let id = +params.get("id")
      this.deptId = id;
    })
  }

  goPrev() { this.goId(this.deptId - 1) }
  goNext() { this.goId (this.deptId + 1) }
  goId(id) {
    this.deptId = id
    this._router.navigate(['/departments', id])
  }
  goDepts() {
    let selectedId = this.deptId ? this.deptId : null;
    this._router.navigate(['/departments',{id: selectedId}])
  }

  showOverview() {
    this._router.navigate(['overview'], { relativeTo: this._route});
  }
  showContact() {
    this._router.navigate(['contact'], { relativeTo: this._route});

  }

}
