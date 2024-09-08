import { create } from 'zustand'

interface ContentState {
   contentId?: string
   contentTypeId?: string
   mapX?: string
   mapY?: string
   setContent: (id?: string, typeId?: string) => void
   setMapCoords: (x?: string, y?: string) => void
}

export const useContentStore = create<ContentState>((set) => ({
   contentId: undefined,
   contentTypeId: undefined,
   mapX: undefined,
   mapY: undefined,
   setContent: (id, typeId) => set({ contentId: id, contentTypeId: typeId }),
   setMapCoords: (x, y) => set({ mapX: x, mapY: y }),
}))
