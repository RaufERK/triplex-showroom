import { create } from 'zustand'

type NavigationStore = {
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeSection: 'typography',
  setActiveSection: (section) => set({ activeSection: section }),
}))
