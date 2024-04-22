import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  panelOpenState: boolean = false;

  experience: any;

  technlang: any = ['Angular', 'ReactJS', 'JavaScript', 'TypeScript', 'HTML/CSS','BOOTSTRAP', 'Rest API', 'Postman','GIT', 'Python', 'PHP', 'Android (Java)', 'Java', 'MySQL', 'Oracle', 'SQLite', 'Firebase Realtime Databse', 'MonogoDB', 'Machine Learning', 'Deep Learning', 'Generative AI', 'NLP', 'Data Science', 'Embedded System Programming', 'C/C++']

  constructor(){}

  ngOnInit(): void {
     // Example usage
    let startDate = '2019-06-01';
    let endDate = new Date(); // Current date

    let age = this.calculateAge(startDate, endDate);
    this.experience = ""+age.years+" years and "+age.months+ " months"
    console.log("Years:", age.years, "Months:", age.months); 
  }

  calculateAge(startDate: any, endDate:any) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    
    var years = end.getFullYear() - start.getFullYear();
    var months = end.getMonth() - start.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years: years, months: months };
  }

}
