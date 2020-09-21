import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    GanttComponent,
    ContextMenuOpenEventArgs,
    ContextMenuClickEventArgs,
    IGanttData, ITaskbarEditedEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { EmitType } from '@syncfusion/ej2-base';
import { editingData, editingResources } from './data';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    constructor() {}

    @ViewChild('gantt', { static: false})
    public ganttObj: GanttComponent;
    data: object[];
    resources: object[];
    resourceFields: object ;
    taskSettings: object;
    columns: object[];
    timelineSettings: object;
    gridLines: string;
    labelSettings: object;
    editSettings: object;
    eventMarkers: object[];
    toolbar: string[];
    contextMenuItems: string[] | Object[];
    splitterSettings: object;

    destroyedData(event): EmitType<ITaskbarEditedEventArgs> {
        console.log(event);
        return event;
    }

    endEditData(event): EmitType<ITaskbarEditedEventArgs> {
        console.log('EndEditData=', event);
        return event;
    }

    taskDrop(event) {
        console.log(event);
    }

    // onActionBegin(args: any): void {
    //     console.log('Args on cell = ', args);

    //     // Triggers on add action using cell add
    //     if (args.action === 'beforeAdd') {
    //        this.addNewTask(args);
    //     }

    //     // Triggers on edit action using cell edit
    //     if (args.requestType === 'beforeSave') {
    //         this.updateTask(args);
    //     }

    //     // Triggers on drag and drop action
    //     if (args.requestType === 'beforeDrop') {
    //         setTimeout(() => {
    //             this.updateOnDragAndDrop(args);
    //         }, 300);
    //     }

    //     // Triggers on delete action using cell delete
    //     if (args.requestType === 'beforeDelete') {
    //         this.deleteTask(args);
    //     }
    // }

    ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            notes: 'info',
            resourceInfo: 'resources',
            progress: 'Progress',
            parentID: 'ParentId',
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'unit'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };

        this.contextMenuItems = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
        'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert', 'Indent', 'Outdent',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        ];
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'PdfExport'];
        this.columns =  [
            { field: 'TaskID', width: '50' },
            { field: 'TaskName', width: '250', clipMode: 'EllipsisWithTooltip' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor' },
            { field: 'resources', headerText: 'Resources', width: '160' },
        ];
        this.timelineSettings = {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, y',
            },
            bottomTier: {
                unit: 'Day',
                count: 1
            },
        };
        this.gridLines = 'Both';
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        };

        this.resources = editingResources;
        this.splitterSettings = {
            columnIndex: 2
        };
    }

    contextMenuClick(args?: ContextMenuClickEventArgs): void {
        const record: IGanttData = args.rowData;
        if (args.item.id === 'collapserow') {
            this.ganttObj.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            this.ganttObj.expandByID(Number(record.ganttProperties.taskId));
        }
    }

    contextMenuOpen(args?: ContextMenuOpenEventArgs): void {
        const record: IGanttData = args.rowData;
        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            } else {
                if (record.expanded) {
                    args.hideItems.push('Expand the Row');
                  } else {
                      args.hideItems.push('Collapse the Row');
                  }
            }
        }
    }

    toolbarClick(args?: ClickEventArgs): void {
        if (args.item.text === 'Pdf export') {
            this.ganttObj.pdfExport();
        }
    }
}
