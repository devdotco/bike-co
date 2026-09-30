import type { VisualKey } from '@/lib/types'
import { BenchBoard, IntakePhone, PartsTable, PurchaseOrder, Invoice, Schedule, BikeRecord } from './screens-a'
import { Checklist, Quote, PhonyCall, ReadyText, Timeclock, JobCosting, Portal, Fleet, JobDetail, Requests } from './screens-b'
import { RouteMap, Reports, SuiteGrid, BuildBom, CompareGrid } from './diagrams'

const MAP: Record<VisualKey, () => React.ReactNode> = {
  'bench-board': BenchBoard,
  'intake-phone': IntakePhone,
  'parts-table': PartsTable,
  'purchase-order': PurchaseOrder,
  invoice: Invoice,
  schedule: Schedule,
  'bike-record': BikeRecord,
  checklist: Checklist,
  quote: Quote,
  'phony-call': PhonyCall,
  'ready-text': ReadyText,
  'route-map': RouteMap,
  timeclock: Timeclock,
  'job-costing': JobCosting,
  reports: Reports,
  portal: Portal,
  'suite-grid': SuiteGrid,
  'build-bom': BuildBom,
  fleet: Fleet,
  'compare-grid': CompareGrid,
  'job-detail': JobDetail,
  requests: Requests,
}

export function Visual({ name }: { name: VisualKey }) {
  const V = MAP[name]
  return <V />
}
