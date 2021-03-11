import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() image: string = '';
  @Input() name: string = '';

  initials: string = '';

  showInitials = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.image) {
      this.showInitials = true;
      this.createInitials();
    }
  }

  createInitials() {
    let initials = '';
    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue;
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i);

        if (initials.length === 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }

}
