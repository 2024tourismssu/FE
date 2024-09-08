import { create } from 'zustand'

interface ContentState {
   contentId?: string
   contentTypeId?: string
   setContent: (id?: string, typeId?: string) => void
}

export const useContentStore = create<ContentState>()((set) => ({
   contentId: undefined,
   contentTypeId: undefined,
   setContent: (id, typeId) => set({ contentId: id, contentTypeId: typeId }),
}))
