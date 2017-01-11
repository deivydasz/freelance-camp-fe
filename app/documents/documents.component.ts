import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent { 
	pageTitle: string = "Document Dashboard"
	
	documents: Document[] = [
		{
			title: "My First Doc",
			description: 'adsfsdg asgsdfg asdgs',
			file_url: 'http://google.com',
			updated_at: '9/1/17',
			image_url: 'https://udemy-images.udemy.com/course/750x422/54155_ffa4_6.jpg',	
		},
		{
			title: "My Second Doc",
			description: 'adsfsdg asgsdfg asdgs',
			file_url: 'http://google.com',
			updated_at: '9/1/17',
			image_url: 'https://udemy-images.udemy.com/course/750x422/54155_ffa4_6.jpg',	
		},
		{
			title: "My Last Doc",
			description: 'adsfsdg asgsdfg asdgs',
			file_url: 'http://google.com',
			updated_at: '9/1/17',
			image_url: 'https://udemy-images.udemy.com/course/750x422/54155_ffa4_6.jpg',	
		}
	]
}