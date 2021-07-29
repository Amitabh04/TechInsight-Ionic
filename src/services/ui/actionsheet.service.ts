import { createApp, ComponentPublicInstance } from 'vue'
import ActionSheet from '@/components/common/ActionSheet.vue'

export interface ActionSheetComponent extends ComponentPublicInstance {
    showSheet(): void;
    hideSheet(): void;
    actions: SheetActionObj[];
}

export interface SheetActionObjEvent {
    close(): void;
    action: SheetActionObj;
}

export interface SheetActionObj {
    label: string;
    handler(event: SheetActionObjEvent): void;
}

class ActionSheetServiceClass {
    create(actions: SheetActionObj[]) {
        const el = document.createElement('div');
        const app = createApp(ActionSheet);
        const instance = app.mount(el) as ActionSheetComponent;
        instance.actions = actions;
        document.body.appendChild(instance.$el);
        return instance as ActionSheetComponent
    }
}

export const ActionSheetService = new ActionSheetServiceClass();
