/* eslint-disable */
import {
  DateRange,
  Note,
  Query,
  QueryNotesInput,
} from '@notes-app/graphql-schema'

export const aDateRange = (overrides?: Partial<DateRange>): DateRange => {
  return {
    from:
      overrides && overrides.hasOwnProperty('from')
        ? overrides.from!
        : '2023-02-01T15:45:48.925248Z',
    to:
      overrides && overrides.hasOwnProperty('to')
        ? overrides.to!
        : '2023-02-01T15:45:48.925248Z',
  }
}

export const aNote = (overrides?: Partial<Note>): Note => {
  return {
    created:
      overrides && overrides.hasOwnProperty('created')
        ? overrides.created!
        : '2023-02-01T15:45:48.925248Z',
    id:
      overrides && overrides.hasOwnProperty('id')
        ? overrides.id!
        : '5c2614e8-326c-4713-9788-d2bb69d93ba5',
    text:
      overrides && overrides.hasOwnProperty('text')
        ? overrides.text!
        : 'dolorem',
  }
}

export const aQuery = (overrides?: Partial<Query>): Query => {
  return {
    notes:
      overrides && overrides.hasOwnProperty('notes')
        ? overrides.notes!
        : [aNote()],
  }
}

export const aQueryNotesInput = (
  overrides?: Partial<QueryNotesInput>
): QueryNotesInput => {
  return {
    created:
      overrides && overrides.hasOwnProperty('created')
        ? overrides.created!
        : aDateRange(),
  }
}
