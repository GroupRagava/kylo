define(["require", "exports", "./mode-card/mode-card.component", "./mode-list/mode-list.component"], function (require, exports, mode_card_component_1, mode_list_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DisplayDocumentsRouting = [
        {
            path: 'recent',
            component: mode_card_component_1.ModeCardComponent
        },
        {
            path: 'shared',
            component: mode_card_component_1.ModeCardComponent
        },
        {
            path: 'starred',
            component: mode_card_component_1.ModeCardComponent
        },
        {
            path: 'archive',
            component: mode_card_component_1.ModeCardComponent
        },
        {
            path: 'list',
            component: mode_list_component_1.ModeListComponent
        }
    ];
});
//# sourceMappingURL=display-documents.routing.js.map