import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-department-list',
  template: `
    <h3> Department List </h3>
    <ul class="items">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        <span class="badge">{{dept.id}}</span> {{dept.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" },
    { "id": 6, "name": "React" },
    { "id": 7, "name": "VueJS" },
  ];
  public selId;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
      this._route.paramMap.subscribe((params: ParamMap) => {
      let id = +params.get("id")
      this.selId = id;
    });
  }
  onSelect(dept) {
    this._router.navigate(['/departments', dept.id]);
  }

  isSelected(dept) {
    dept.id === this.selId;

  }

}
