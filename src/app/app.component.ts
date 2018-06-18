import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    created_at;
     posts = [
        {
            title: 'Mon premier post',
            content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ' +
            'Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble ' +
            'des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, ' +
            'mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé ' +
            'dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, ' +
            'par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
            loveIts: 0,
        },
        {
            title: 'Mon deuxième post',
            content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ' +
            'Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble ' +
            'des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, ' +
            'mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé ' +
            'dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, ' +
            'par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
            loveIts: 0,
        },
        {
            title: 'Encore un post',
            content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ' +
            'Le Lorem Ipsum est le faux texte standard de limprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble ' +
            'des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, ' +
            'mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé ' +
            'dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, ' +
            'par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.',
            loveIts: 0,
        }
    ]

    constructor() {
        this.created_at = new Date();
    }
}
