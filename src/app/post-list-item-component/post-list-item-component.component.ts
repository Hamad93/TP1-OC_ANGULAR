import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postLoveits: number;
    @Input() postCreated_at;

    constructor() {
        this.postLoveits = 0;
    }

    ngOnInit() {
    }

    onLike() {
        this.postLoveits += 1;
    }
    onDislike() {
        this.postLoveits -= 1;
    }
    getLikes () {
        return this.postLoveits;
    }
}
