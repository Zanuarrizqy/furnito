import { Button } from "@/components/ui/button"
import { Check, X, Eye } from "lucide-react"
import { mockProducts as products } from "@/data/mockData"

export default function RejectedPage() {
  return (
    <div className="flex flex-col gap-0 flex-1">
      {/* Topbar */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div>
          <h1 className="text-base font-medium">Verification queue</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Review and approve product listings</p>
        </div>
      </div>

      {/* Product list */}
      <div className="flex flex-col divide-y px-6">
        {products.map((p) => (
          <div key={p.id} className="flex items-start gap-3 py-4">
            <div className="w-14 h-14 rounded-lg bg-muted border flex items-center justify-center text-2xl shrink-0">
              <span role="img" aria-label={p.name} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-medium">{p.name}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{p.description}</p>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 text-[8px] font-medium flex items-center justify-center">
                    {/* {p.initials} */}
                  </span>
                  {p.sellerId}
                </span>
                <span>·</span>
                <span>{p.createdAt}</span>
                <span>·</span>
                <span>
                  {p.images.length} image{p.images.length !== 1 ? "s" : ""}
                </span>
                <span className="ml-auto text-sm font-medium text-foreground">{p.price}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <Button variant="outline" size="icon" className="w-7 h-7">
                <Eye className="w-3.5 h-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="w-7 h-7 border-green-300 text-green-700 hover:bg-green-50">
                <Check className="w-3.5 h-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="w-7 h-7 border-red-300 text-red-700 hover:bg-red-50">
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}