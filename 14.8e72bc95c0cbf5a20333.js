(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Ow7":function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},o=n("WmtN"),u=n("ueff"),r=n("lOTE"),s=n("FlAz"),i=n("2lKK"),c=n("N07i"),d=n("pMnS"),p=n("gMr2"),m=n("gIcY"),b=n("QpxQ"),f=n("qSOI"),h=n("Okzp"),g=n("OhVH"),v=n("ZPXm"),y=n("sg7z"),T=function(){function e(e){this.rankingTableService=e,this.columns=[{name:"rank",text:"Rank",type:"RankTableCellComponent",sortable:!1,center:!0},{name:"photoUrl",text:"Club",type:"ImageTableCellComponent",sortable:!1,center:!0},{name:"club",text:"",type:"ObjectTextTableCellComponent",sortable:!1},{name:"played",text:"Played",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"won",text:"W",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"drawn",text:"D",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"lost",text:"L",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"goalFor",text:"GF",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"goalAgainst",text:"GA",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"goalDifference",text:"GD",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"point",text:"P",type:"TextTableCellComponent",sortable:!1,center:!0},{name:"actions",text:"Actions",type:"ActionsTableCellComponent",sortable:!1}],this.sortMode={sortBy:"rank",isSortAscending:!0},this.filterMode={},this.actions=[{class:"btn-primary",icon:"",text:"Detail",type:y.a.GetDetail}]}return e.prototype.getDataColumns=function(){return this.columns},e.prototype.getRawData=function(){return this.rankingTableService.getTable(this.filterMode).toPromise()},e.prototype.getDataRows=function(){return e=this,void 0,n=function(){var e=this;return function(e,l){var n,t,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,t&&(a=2&o[0]?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;switch(t=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,t=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){u.label=o[1];break}if(6===o[0]&&u.label<a[1]){u.label=a[1],a=o;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(o);break}a[2]&&u.ops.pop(),u.trys.pop();continue}o=l.call(e,u)}catch(e){o=[6,e],t=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}}(this,function(l){switch(l.label){case 0:return[4,this.getRawData().then(function(l){return e.rows=l.map(function(n){var t={};for(var a in n)n.hasOwnProperty(a)&&("rank"===a?t[a]={value:n[a],textProperty:"name",totalClubs:l.length}:"club"===a?(t[a]={value:n[a],textProperty:"name",bold:!0},t.photoUrl={value:n[a].photoUrl}):t[a]="point"===a?{value:n[a],bold:!0}:{value:n[a]});return t.actions={value:e.actions,showText:!0},{cells:t}}),e.rows})];case 1:return[2,l.sent()]}})},new((l=void 0)||(l=Promise))(function(t,a){function o(e){try{r(n.next(e))}catch(e){a(e)}}function u(e){try{r(n.throw(e))}catch(e){a(e)}}function r(e){e.done?t(e.value):new l(function(l){l(e.value)}).then(o,u)}r((n=n.apply(e,[])).next())});var e,l,n},e}(),C=function(){function e(e,l,n){this.router=e,this.route=l,this.tablesTableService=n}return e.prototype.ngOnInit=function(){var e=this;this.route.data.subscribe(function(l){e.seasons=l.seasons,e.currentSeason=e.seasons[0],e.seasonSelect.writeValue(e.seasons[0].id),e.tablesTableService.filterMode.seasonId=e.seasons[0].id})},e.prototype.onTableCellChanged=function(e){switch(e.newValue.type){case y.a.GetDetail:this.navigateToClubDetail(e.row.cells.club.value.id)}},e.prototype.navigateToClubDetail=function(e){this.router.navigate(["/clubs",e])},e.prototype.onSeasonFilterChanged=function(e){this.currentSeason=e,this.tablesTableService.filterMode.seasonId=e?e.id:null,this.datatable.refresh()},e}(),w=n("ZYCi"),x=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function S(e){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{seasonSelect:0}),t["\u0275qud"](402653184,2,{datatable:0}),(e()(),t["\u0275eld"](2,0,null,null,26,"div",[["class","container mt-3 mb-4"]],null,null,null,null,null)),(e()(),t["\u0275eld"](3,0,null,null,1,"h1",[["class","text-center"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["Tables"])),(e()(),t["\u0275eld"](5,0,null,null,20,"div",[["class","row mt-3"]],null,null,null,null,null)),(e()(),t["\u0275eld"](6,0,null,null,19,"div",[["class","col-lg-4 col-md-6"]],null,null,null,null,null)),(e()(),t["\u0275eld"](7,0,null,null,18,"div",[["class","d-flex flex-row align-items-center"]],null,null,null,null,null)),(e()(),t["\u0275eld"](8,0,null,null,2,"div",[["class","col-3"]],null,null,null,null,null)),(e()(),t["\u0275eld"](9,0,null,null,1,"span",[["class","font-weight-bold"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["Season: "])),(e()(),t["\u0275eld"](11,0,null,null,14,"div",[["class","col-9"]],null,null,null,null,null)),(e()(),t["\u0275eld"](12,0,null,null,13,"ng-select",[["bindLabel","name"],["bindValue","id"],["class","ng-select"],["placeholder","Select Season"],["role","listbox"]],[[2,"ng-select-single",null],[2,"ng-select-typeahead",null],[2,"ng-select-multiple",null],[2,"ng-select-taggable",null],[2,"ng-select-searchable",null],[2,"ng-select-opened",null],[2,"ng-select-disabled",null],[2,"ng-select-filtered",null]],[[null,"change"],[null,"keydown"]],function(e,l,n){var a=!0,o=e.component;return"keydown"===l&&(a=!1!==t["\u0275nov"](e,14).handleKeyDown(n)&&a),"change"===l&&(a=!1!==o.onSeasonFilterChanged(n)&&a),a},p.b,p.a)),t["\u0275prd"](5120,null,m.j,function(e){return[e]},[b.a]),t["\u0275did"](14,4964352,[[1,4],["seasonSelect",4]],11,b.a,[[8,null],[8,null],[8,null],b.b,b.d,t.ElementRef,t.ChangeDetectorRef,b.j],{items:[0,"items"],bindLabel:[1,"bindLabel"],bindValue:[2,"bindValue"],clearable:[3,"clearable"],placeholder:[4,"placeholder"],selectOnTab:[5,"selectOnTab"]},{changeEvent:"change"}),t["\u0275qud"](335544320,3,{optionTemplate:0}),t["\u0275qud"](335544320,4,{optgroupTemplate:0}),t["\u0275qud"](335544320,5,{labelTemplate:0}),t["\u0275qud"](335544320,6,{multiLabelTemplate:0}),t["\u0275qud"](335544320,7,{headerTemplate:0}),t["\u0275qud"](335544320,8,{footerTemplate:0}),t["\u0275qud"](335544320,9,{notFoundTemplate:0}),t["\u0275qud"](335544320,10,{typeToSearchTemplate:0}),t["\u0275qud"](335544320,11,{loadingTextTemplate:0}),t["\u0275qud"](335544320,12,{tagTemplate:0}),t["\u0275qud"](603979776,13,{ngOptions:1}),(e()(),t["\u0275eld"](26,0,null,null,2,"div",[["class","mt-3"]],null,null,null,null,null)),(e()(),t["\u0275eld"](27,0,null,null,1,"app-datatable",[],null,[[null,"cellChanged"]],function(e,l,n){var t=!0;return"cellChanged"===l&&(t=!1!==e.component.onTableCellChanged(n)&&t),t},f.b,f.a)),t["\u0275did"](28,114688,[[2,4]],0,h.a,[g.a],{tableService:[0,"tableService"]},{cellChanged:"cellChanged"})],function(e,l){var n=l.component;e(l,14,0,n.seasons,"name","id",!1,"Select Season",!0),e(l,28,0,n.tablesTableService)},function(e,l){e(l,12,0,!t["\u0275nov"](l,14).multiple,t["\u0275nov"](l,14).typeahead,t["\u0275nov"](l,14).multiple,t["\u0275nov"](l,14).addTag,t["\u0275nov"](l,14).searchable,t["\u0275nov"](l,14).isOpen,t["\u0275nov"](l,14).disabled,t["\u0275nov"](l,14).filtered)})}var k=t["\u0275ccf"]("app-tables",C,function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,2,"app-tables",[],null,null,null,S,x)),t["\u0275prd"](512,null,T,T,[v.a]),t["\u0275did"](2,114688,null,0,C,[w.k,w.a,T],null,null)],function(e,l){e(l,2,0)},null)},{},{},[]),O=n("Ip0R"),q=n("S7LP"),F=n("6aHO"),M=n("dArN"),R=n("n1ky"),D=n("OQnT"),L=n("008C"),A=n("L7CA"),I=n("F3U1"),P=n("+zL3"),N=n("MV7I"),V=n("5KO+"),z=n("Y8uI"),G=n("0Rz3"),U=n("JfBm"),j=n("kfMT"),E=n("8ASg"),_=n("S6T7"),J=n("qina"),K=n("aZVl"),Y=n("YMcg"),Z=n("z+jS"),B=n("Fq6B"),Q=n("fitU"),H=n("PCNd"),W=n("X3yp"),X=function(){},$=n("JG/o"),ee=n("OsAV");n.d(l,"TablesModuleNgFactory",function(){return le});var le=t["\u0275cmf"](a,[],function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,u.a,r.a,s.a,i.a,c.a,d.a,k]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[t.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,m.s,m.s,[]),t["\u0275mpd"](4608,m.e,m.e,[]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,F.a,F.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,q.a,t.ApplicationRef]),t["\u0275mpd"](4608,M.a,M.a,[]),t["\u0275mpd"](4608,R.a,R.a,[]),t["\u0275mpd"](4608,D.a,D.a,[]),t["\u0275mpd"](4608,L.a,L.a,[t.RendererFactory2,F.a]),t["\u0275mpd"](4608,A.a,A.a,[]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](4608,N.a,N.a,[]),t["\u0275mpd"](4608,V.a,V.a,[]),t["\u0275mpd"](4608,z.a,z.a,[I.a,V.a]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](4608,j.a,j.a,[]),t["\u0275mpd"](4608,E.a,E.a,[]),t["\u0275mpd"](4608,g.a,g.a,[]),t["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),t["\u0275mpd"](1073742336,m.p,m.p,[]),t["\u0275mpd"](1073742336,m.h,m.h,[]),t["\u0275mpd"](1073742336,m.n,m.n,[]),t["\u0275mpd"](1073742336,b.c,b.c,[]),t["\u0275mpd"](1073742336,_.FileUploadModule,_.FileUploadModule,[]),t["\u0275mpd"](1073742336,J.a,J.a,[]),t["\u0275mpd"](1073742336,K.a,K.a,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,Q.a,Q.a,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,w.n,w.n,[[2,w.t],[2,w.k]]),t["\u0275mpd"](1073742336,X,X,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,b.d,b.e,[]),t["\u0275mpd"](256,ee.a,{autoClose:!0},[]),t["\u0275mpd"](1024,w.i,function(){return[[{path:"",component:C,resolve:{seasons:W.a}}],[]]},[])])})}}]);