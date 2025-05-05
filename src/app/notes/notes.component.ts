import { Component, Input } from '@angular/core';
import { NotesService } from './notes.service';
import { NgFor } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';

@Component({
    selector: 'spartan-notes',
    imports: [NgFor, NotesListComponent],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css',
})
export class NotesComponent {
    @Input() userEmail: string = 'None';

    notes: any[] = [];

    constructor(notesService: NotesService) {
        this.notes = [
            // Notes with various lengths and content types
            {
                id: 1,
                title: 'Shopping List',
                content:
                    'Milk, eggs, bread, cheese, vegetables, fruits, chicken',
            },
            {
                id: 2,
                title: 'Meeting Notes',
                content:
                    'Discussed Q2 goals with the team. Action items: Create new feature roadmap, finish bug fixes by Friday, schedule client demo for next Tuesday.',
            },
            {
                id: 3,
                title: 'Book Recommendations',
                content:
                    'The Pragmatic Programmer by Andy Hunt, Clean Code by Robert C. Martin, Design Patterns by Gang of Four',
            },
            {
                id: 4,
                title: 'Project Ideas',
                content:
                    'Build a personal finance tracker\nCreate a recipe organizer app\nDesign a habit tracking system\nDevelop a language learning flashcard tool',
            },
            {
                id: 5,
                title: 'Vacation Planning',
                content:
                    'Potential destinations:\n- Barcelona, Spain\n- Tokyo, Japan\n- Vancouver, Canada\n\nThings to consider: budget, time of year, activities, accommodations',
            },
            { id: 6, title: 'Quick Reminder', content: 'Call dentist' },
            {
                id: 7,
                title: 'Research Notes: Machine Learning',
                content:
                    'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.\n\nTypes of Machine Learning:\n1. Supervised Learning: The algorithm is trained on labeled data.\n2. Unsupervised Learning: The algorithm identifies patterns from unlabeled data.\n3. Reinforcement Learning: The algorithm learns through trial and error interactions with an environment.\n\nPopular algorithms include linear regression, decision trees, neural networks, and k-means clustering. Libraries to explore: TensorFlow, PyTorch, scikit-learn.',
            },
            {
                id: 8,
                title: 'Weekly Goals',
                content:
                    '- Complete Angular project setup\n- Study for certification\n- Run 15 miles\n- Prepare presentation',
            },
            {
                id: 9,
                title: 'Recipe: Chocolate Chip Cookies',
                content:
                    'Ingredients:\n- 2 1/4 cups all-purpose flour\n- 1 tsp baking soda\n- 1 tsp salt\n- 1 cup butter, softened\n- 3/4 cup granulated sugar\n- 3/4 cup packed brown sugar\n- 2 large eggs\n- 2 tsp vanilla extract\n- 2 cups chocolate chips\n\nInstructions:\n1. Preheat oven to 375°F\n2. Mix dry ingredients\n3. Cream butter and sugars\n4. Add eggs and vanilla\n5. Gradually add flour mixture\n6. Stir in chocolate chips\n7. Drop by rounded tablespoon onto baking sheet\n8. Bake 9-11 minutes or until golden brown',
            },
            {
                id: 10,
                title: 'Workout Plan',
                content:
                    'Monday: Upper body\nTuesday: Lower body\nWednesday: Cardio\nThursday: Core\nFriday: Full body\nWeekend: Rest and recovery',
            },
        ];
        /*const userToken: string = localStorage.getItem('auth_token') || '';

        notesService.getUserId(userToken).subscribe((userId) => {
            if (userId) {
                notesService.getNotesByUserId(userId).subscribe((notes) => {
                    this.notes = notes;
                });
            } else {
                console.error('No user ID found');
            }
        }); */
    }
}
