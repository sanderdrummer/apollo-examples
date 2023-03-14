/* eslint-disable */

export const aNote = (overrides?: Partial<Note>): Note => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'tenetur',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '5c2614e8-326c-4713-9788-d2bb69d93ba5',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'dolorem',
    };
};

export const aNoteWithoutId = (overrides?: Partial<NoteWithoutId>): NoteWithoutId => {
    return {
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'ipsum',
        text: overrides && overrides.hasOwnProperty('text') ? overrides.text! : 'sint',
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        notes: overrides && overrides.hasOwnProperty('notes') ? overrides.notes! : [aNote()],
        notesWithoutId: overrides && overrides.hasOwnProperty('notesWithoutId') ? overrides.notesWithoutId! : [aNote()],
    };
};
