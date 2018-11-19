import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Subscription } from 'rxjs';
import { Season } from 'src/app/core/models/season.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { DatatableComponent } from 'src/app/datatable/datatable.component';
import { TableActionType } from 'src/app/datatable/models/table-action.interface';
import { TableCellChange } from 'src/app/datatable/models/table-cell-change.interface';
import { TableRow } from 'src/app/datatable/models/table-row.interface';
import { ConfirmModalComponent } from 'src/app/shared/modals/confirm-modal/confirm-modal.component';

import { AdminSquadManagerTableService } from '../../services/admin-squad-manager-table.service';

@Component({
  selector: 'app-admin-squad-manager',
  templateUrl: './admin-squad-manager.component.html',
  styleUrls: ['./admin-squad-manager.component.scss'],
  providers: [AdminSquadManagerTableService]
})
export class AdminSquadManagerComponent implements OnInit {

  @ViewChild(NgSelectComponent) seasonSelect: NgSelectComponent;
  @ViewChild(DatatableComponent) datatable: DatatableComponent;
  @ViewChild('search') search: ElementRef;

  seasons: Season[];

  searchSubscription: Subscription;
  bsModalRef: BsModalRef;

  constructor(private route: ActivatedRoute,
    public adminSquadManagerTableService: AdminSquadManagerTableService,
    private squadService: SquadService,
    private alertService: AlertService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.seasons = data['seasons'];
      this.seasonSelect.writeValue(this.seasons[0].id);
      this.adminSquadManagerTableService.filterMode.seasonId = this.seasons[0].id;
    });
  }

  onTableCellChanged(tableCellChange: TableCellChange) {
    const action = tableCellChange.newValue;
    switch (action.type) {
      case TableActionType.Edit:
        this.openEditModal(tableCellChange.row);
        break;
      case TableActionType.Delete:
        this.openDeleteModal(tableCellChange.row.cells['id'].value);
        break;
    }
  }

  onSeasonFilterChanged(season: Season) {
    this.adminSquadManagerTableService.filterMode.seasonId = season ? season.id : null;
    this.adminSquadManagerTableService.pagination = { pageNumber: 1, pageSize: 10 };
    this.datatable.refresh();
  }

  openAddModal() {
    // this.bsModalRef = this.modalService.show(AdminClubAddModalComponent, {
    //   initialState: {
    //     title: 'Add New Squad'
    //   },
    //   class: 'modal-dialog-centered'
    // });

    // this.bsModalRef.content.clubAdded
    //   .subscribe(() => this.onSquadAdded());
  }

  onSquadAdded() {
    this.datatable.refresh();
  }

  openEditModal(rowData: TableRow) {
    // this.bsModalRef = this.modalService.show(AdminClubEditModalComponent, {
    //   initialState: {
    //     title: 'Edit Squad',
    //     rowData
    //   },
    //   class: 'modal-dialog-centered'
    // });

    // this.bsModalRef.content.clubEdited
    //   .subscribe(() => this.onSquadEdited());
  }

  onSquadEdited() {
    this.datatable.refresh();
  }

  openDeleteModal(id: number) {
    this.bsModalRef = this.modalService.show(ConfirmModalComponent, {
      initialState: {
        content: 'Are you sure you want to delete this squad?'
      },
      class: 'modal-dialog-centered'
    });

    this.bsModalRef.content.ok
      .subscribe(() => this.confirmDeleteSquad(id));
  }

  confirmDeleteSquad(id: number) {
    this.squadService.deleteSquad(id)
      .subscribe(
        () => {
          this.alertService.success('Delete squad successfully');
          this.datatable.refresh();
        },
        () => this.alertService.error('Delete squad failed')
      );
  }

}
