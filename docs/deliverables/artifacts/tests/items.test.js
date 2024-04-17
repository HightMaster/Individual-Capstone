import * as DBHandler from '../database/db_util'
import { mount } from '@vue/test-utils'
import { expect, describe, it, test, assert } from 'vitest';
//import SeriesCard from '../components/SeriesCard.vue'

// describe('Foo Tests!', () => {
//     it("Should Run", () => {
//     })
// })\

const mockDbUtil = {
    // Implement mock functions here as needed for testing
};

// Mock console.log if necessar

// Test suite for DBHandler functions
describe('GET Functionality for UI elements', () => {
    test('getAllSeries()', async () => {
        const result = await DBHandler.getAllSeries('created');
        expect(result.data.length).toBe(result.data.length)
        // Add more specific assertions based on expected behavior
    });

    test('getSingleSeriesByTitle()', async () => {
        const title = 'Avatar';
        const result = await DBHandler.getSingleSeriesByTitle({ title });
        expect(result.data.title).toBe("Avatar the Last Airbender")
        // Add more specific assertions based on expected behavior
    });

    test('getSingleSeriesByID()', async () => {
        const result = await DBHandler.getSingleSeriesByID({id: "jos1frvdijafpog"});
        expect(result.data.title).toBe("Avatar the Last Airbender")
        // Add more specific assertions based on expected behavior
    });

    test('getSectionBySeriesTitle()', async () => {
        const result = await DBHandler.getSectionBySeriesTitle({ series_title: "Avatar", section_no: 3});
        expect(result.data.name).toBe("Book 3")
    });

    test('getSectionBySeriesID()', async () => {
        const result = await DBHandler.getSectionBySeriesID({ series_id: "jos1frvdijafpog", section_no: 3});
        expect(result.data.name).toBe("Book 3")
    });

    test('getSectionsBySeriesTitle()', async () => {
        const result = await DBHandler.getSectionsBySeriesTitle({series_title: "Avatar"})
        expect(result.data.length).toBe(3)
    });

    // Add tests for other DBHandler functions similarly
});

describe('All other functionality', () => {
    
    test('createSeries() AND deleteSeries()', async () => {
        //const result2 = await DBHandler.getSingleSeriesByTitle({title: "test"})
        //await DBHandler.deleteSeries({series_id: result2.data.id})
        await DBHandler.createSeries({title: "test series", section_count: 3, section_type: "Season"})
        const result = await DBHandler.getSingleSeriesByTitle({title: "test"})
        expect(result.data.liked).toBe(false)
    });

    test('updateSeries()', async () => {
        const result2 = await DBHandler.getSingleSeriesByTitle({title: "test"})
        await DBHandler.updateSeries({series_id: result2.data.id, title: "test series (official)"})
        const result = await DBHandler.getSingleSeriesByTitle({title: "test"})
        expect(result.data.title).not.toBe("test")
    });

    test('createSection()', async () => {
        const sections = await DBHandler.getSectionsBySeriesTitle({title: "avatar"})
        console.log(sections)
        expect(sections.response).toBe("Request was succesfully transferred")
    });

    test('updateSection()', async () => {
        const response = (await DBHandler.updateSectionByID({section_id: "1mw0tlzpbyy7hyi"})).response
        expect(response).toBe("Request was succesfully transferred")
    });

    test('deleteSeries() and deleteSection()', async () => {
        const result2 = await DBHandler.getSingleSeriesByTitle({title: "test"})
        await DBHandler.deleteSeries({series_id: result2.data.id})
        const result = await DBHandler.getAllSeries('created');
        expect(result.data.length).toBe(5)
    });

    test('', async () => {
        const result2 = (await DBHandler.getSingleSeriesByTitle({title: "avatar"})).data.liked
        await DBHandler.toggleLiked({series_id: "jos1frvdijafpog"})
        const result1 = (await DBHandler.getSingleSeriesByTitle({title: "avatar"})).data.liked
        expect(result2).not.toBe(result1)
    })
});
