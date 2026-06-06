// ServiceNow server-side globals for LSP / TypeScript Language Server
// Provides IntelliSense for GlideRecord, gs, $sp, data, input, current
// in all server_script.js widget files.

declare class GlideRecord {
    constructor(table: string);
    initialize(): void;
    get(id: string): boolean;
    next(): boolean;
    query(): void;
    insert(): string;
    update(): string;
    deleteRecord(): boolean;

    addQuery(field: string, value: any): GlideQueryCondition;
    addQuery(field: string, operator: string, value: any): GlideQueryCondition;
    addNullQuery(field: string): GlideQueryCondition;
    addNotNullQuery(field: string): GlideQueryCondition;
    addEncodedQuery(query: string): void;
    addOrCondition(field: string, value: any): GlideQueryCondition;
    setLimit(limit: number): void;
    orderBy(field: string): void;
    orderByDesc(field: string): void;

    getValue(field: string): string;
    getDisplayValue(field: string): string;
    setValue(field: string, value: any): void;
    getUniqueValue(): string;
    setWorkflow(enable: boolean): void;
    autoSysFields(enable: boolean): void;
}

declare class GlideQueryCondition {
    addOrCondition(field: string, value: any): GlideQueryCondition;
    addCondition(field: string, value: any): GlideQueryCondition;
}

declare class GlideAggregate {
    constructor(table: string);
    query(): void;
    next(): boolean;
    addQuery(field: string, value: any): GlideQueryCondition;
    addAggregate(agg: string, field?: string): void;
    groupBy(field: string): void;
    orderByAggregate(agg: string, field?: string): void;
    getAggregate(agg: string, field?: string): string;
    getValue(field: string): string;
}

declare namespace gs {
    function getUserID(): string;
    function getUserName(): string;
    function getUser(): { getFirstName(): string; getLastName(): string; getName(): string };
    function log(msg: string, source?: string): void;
    function info(msg: string, ...args: any[]): void;
    function warn(msg: string, ...args: any[]): void;
    function error(msg: string, ...args: any[]): void;
    function addInfoMessage(msg: string): void;
    function addErrorMessage(msg: string): void;
    function hasRole(role: string): boolean;
    function getProperty(name: string, defaultValue?: string): string;
    function nowDateTime(): string;
}

declare const $sp: {
    getParameter(name: string): string;
    getPortalRecord(): GlideRecord;
    getWidget(id: string, options?: object): object;
    getRecord(): GlideRecord;
    getCatalogs(): any[];
    log(msg: string): void;
};

/** Widget server script: response object sent to the client */
declare var data: { [key: string]: any };
/** Widget server script: object received from c.server.get() on the client */
declare var input: { [key: string]: any } | null | undefined;
/** Business rule current record */
declare var current: GlideRecord;
/** Business rule previous record values */
declare var previous: GlideRecord;

// ServiceNow Class framework (used by ScriptIncludes)
declare const Class: {
    create(): any;
};
declare const AbstractAjaxProcessor: any;
interface ObjectConstructor {
    extendsObject(base: any, members: object): any;
}
