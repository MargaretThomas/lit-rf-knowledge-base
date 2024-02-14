import { Component, Input } from '@angular/core';
import { SpaceCapsuleComponent } from '../space-capsule/space-capsule.component';
import { SpaceCapsule } from '../space-capsule';
import { platformEnum } from '../space-capsule';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SpaceCapsuleComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  spaceCapsulesList: SpaceCapsule[] = [
    {
      id: 1,
      name: "Kaizen",
      url: "https://www.linkedin.com/posts/patrick-skene_excellence-incrementalgains-evolution-activity-7158549504755961856-DRHl/",
      platform: platformEnum.LinkedIn
    }, 
    {
      id: 2,
      name: "Matric motivation",
      url: "https://www.linkedin.com/posts/nafeesa-alibedi-503b82146_womanintech-edtechinnovation-womenentrepreneurs-activity-7135913796321091584-2Xmm/",
      platform: platformEnum.LinkedIn
    }, 
    {
      id: 3,
      name: "Fifi the cat",
      url: "https://www.instagram.com/reel/C1u0CWzsM43/?igsh=MTR6eXp5aW0zbTJ0eQ==",
      platform: platformEnum.Instagram
    },
    {
      id: 4,
      name: "Sharon the cat mom",
      url: "https://www.instagram.com/reel/CoOk5LWATdE/?igsh=MWpha2oyY3RxaTBxZA==",
      platform: platformEnum.Instagram
    },
    {
      id: 5,
      name: "Naval on Quality",
      url: "https://x.com/naval/status/1309040145107243010?s=20",
      platform: platformEnum.Twitter
    },
    {
      id: 6,
      name: "Naval on Things in Life",
      url: "https://x.com/naval/status/966512979066765313?s=20",
      platform: platformEnum.Twitter
    },
    {
      id: 7,
      name: "Tech stack of Pinterest",
      url: "https://www.reddit.com/r/programming/s/5fYN98v2dP",
      platform: platformEnum.Reddit
    },
    {
      id: 8,
      name: "Cute sheep on farm",
      url: "https://www.reddit.com/r/aww/s/snv89cFuUU",
      platform: platformEnum.Reddit
    },
    {
      id: 9,
      name: "Pokemon but it's a nature show",
      url: "https://www.facebook.com/watch/?v=1034989924470597",
      platform: platformEnum.Facebook
    },
    {
      id: 10,
      name: "Baking emojis",
      url: "https://www.facebook.com/watch/?v=350162467561369",
      platform: platformEnum.Facebook
    },
    {
      id: 11,
      name: "Spotify Blend BTS",
      url: "https://engineering.atspotify.com/2021/12/a-look-behind-blend-the-personalized-playlist-for-youand-you/",
      platform: platformEnum.GeneralWeb
    },
    {
      id: 12,
      name: "Crochet tutorial",
      url: "https://www.youtube.com/watch?v=aAxGTnVNJiE",
      platform: platformEnum.GeneralWeb
    }
  ];
}
