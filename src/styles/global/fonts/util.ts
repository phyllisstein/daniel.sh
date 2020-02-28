export interface FontEdge {
  node: FontNode[]
}

export interface FontNode {
  ext: '.woff' | '.woff2'
  name: string
  publicURL: string
}
