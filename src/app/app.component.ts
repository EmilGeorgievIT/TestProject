import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileManagerComponent, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ NavigationPaneService, ToolbarService, DetailsViewService]
})

export class AppComponent implements OnInit {
    public ajaxSettings: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTdTI0VFFSUzlhNHhNUkVHTWVJZ0NSQkU2V0VlbUFibUJSQUd0dENJSTR5WklST09kNjgwNDgySm1ObGszeUIwbEVnZ0ppWUtHSmhJXC9RQU1mUU1VSFVGQlJoWmFXbVhXU05UUVJVODJlT1h2T3VZK1ArM0RTR3JpWkc4SzRqVFV2Y2laanF3MlR1Y1dzTU14TjRzS2lvZWdxeHYyS09QQUl6RTdVZ0NpRkJxTU96cVpqc2tNNm5NaThzejRjWStaNnBZR3VNdm1CNHNnUWdidktiTWRIMnBreStKZEJMUjE5YUVCckE5b2t5MVFoM1FNbDEwck5ETklOV0t5eFZHWGJBVHFmK1JlVWpoRnU1Nmt0bEdUSWthWndtaFJ1UzNsWGh0YkJtVm5Zd2pIZTZhUHJwWEJLRTJ0OXVuOHE2YnNRUGJ5SG1OSlg4QXllUTdQVWtUKytkOWNDTlE0NjhhcmkzRmZObExSTEF5a1VaU01XekwzKzlQS3JieVwvZlRRY05BTitUNjhmXC9VK09YVm1ENjllbnZLMVdqbzh6Qmhibm9OYTFYYXArbVhTc1wvTmhpY3Y3OTkrUHJOXC9vc25KN3h6WU56N1wvM2tzM1QzbzNHUlZDVTBNY1dwdVJsNTJ0eG51WG56bGVQSERLVXppUGhPYW85OG82WkFlV2RUQ3Z0eW1VZnl3M3c0V0hxMm5hNXUzbDVlNzRlc2NvWUxKT3hSM2JtaGxIT0ZlWFwvZ01GME9Hb1ZVeWRoT05OcDZ0WWtLN3Z6Nm43K2w0Mm9CbUFxMXFmOUFrMEJZazIySVNrMnA3Umd4Tkg5cmFxQXl0cmJFRUZod1RmbkdJMEtXR24zdTM0TlBpRjNGMWsrNzkrQU9kMkFMblJRTUFBQT09Iiwic3ViIjoiYWRtaW5AZGV2LXBvcnRhbC5jb20iLCJyb2xlcyI6WyJST0xFXzkwMDIiXSwiaXNzIjoiU3ByaW5nIFNlY3VyaXR5IFJFU1QgR3JhaWxzIFBsdWdpbiIsImV4cCI6MTYwMjQzMTQ5NiwiaWF0IjoxNjAyNDI3ODk2fQ.eeRP0Cq4jOgsw_snkmMOVQ-wTR4CoyEtZf8LMBBLUw8';
    
    //File Manager's beforeSend event 
    beforeSend(args: any){ 
        //Ajax beforeSend event 
        args.ajaxSettings.beforeSend = function (args) { 
            //Setting authorization header 
            args.httpRequest.setRequestHeader("Authorization", this.token) 
        } 
    }

    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
    }
}
