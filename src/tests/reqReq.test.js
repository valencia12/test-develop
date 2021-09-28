import { renderHook, act } from '@testing-library/react-hooks'
import { describe } from 'jest-circus'
import useWindow from '../Hooks/useWindows'

import { getImagen } from '../api/reqReq'
describe('Async Await y fetch, Render useWindows', ()=>{
    
    test("should render different screens", () =>{
        const { result } = renderHook(() => useWindow())
        expect(true).toBe(true)
    })

    test('Should return url from service', async() =>{
        const url = await getImagen()
        expect(url.includes('https://')).toBe(true)
    })

})
    



