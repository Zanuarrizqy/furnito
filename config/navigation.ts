// src/config/navigation.ts
import { LayoutGrid, Bell, CheckCircle, Clock, Ban, Inbox, UsersRound, Store, AppWindow } from "lucide-react"

export type UserRole = "admin" | "seller" | "user"

export const getNavConfig = (role: UserRole) => {
  // Jika user, arahkan ke /user. Jika admin/seller, arahkan ke /admin atau /seller
  const basePath = role === "user" ? "/user" : `/${role}`;

  const allNavGroups = [
    {
      label: "Main",
      items: [
        { title: "Dashboard", url: `${basePath}/dashboard`, icon: LayoutGrid, badge: null, allowedRoles: ["admin", "seller"] },
        { title: "Profile", url: `${basePath}/profile`, icon: LayoutGrid, badge: null, allowedRoles: ["seller", "user"] },
        { title: "Notifications", url: `${basePath}/notifications`, icon: Bell, badge: null, allowedRoles: ["admin", "seller"] },
      ],
    },
    {
      label: "Products",
      items: [
        { title: "Draft", url: `${basePath}/products/draft`, icon: CheckCircle, badge: null, allowedRoles: ["seller"] },
        { title: "Approved", url: `${basePath}/products/approved`, icon: CheckCircle, badge: null, allowedRoles: ["admin", "seller"] },
        { title: "Queue", url: `${basePath}/products/queue`, icon: Clock, badge: 8, badgeVariant: "destructive", allowedRoles: ["admin", "seller"] },
        { title: "Rejected", url: `${basePath}/products/rejected`, icon: Ban, badge: null, allowedRoles: ["admin", "seller"] },
        { title: "Favorite Products", url: `${basePath}/products/favorite`, icon: Ban, badge: null, allowedRoles: ["user"] },
      ],
    },
    {
      label: "Management",
      items: [
        { title: "Users", url: `${basePath}/users`, icon: UsersRound, badge: null, allowedRoles: ["admin"] },
        { title: "Sellers", url: `${basePath}/sellers`, icon: Store, badge: null, allowedRoles: ["admin"] },
      ],
    },
    {
      label: "Homepage Management",
      items: [
        { title: "Banner",    url: `${basePath}/homepage/banner`,    icon: AppWindow,        badge: null, allowedRoles: ["admin"]  },
      ],
    },
  ]

  // Filter otomatis saat fungsi ini dipanggil
  return allNavGroups
    .map(group => ({
      ...group,
      items: group.items.filter(item => item.allowedRoles.includes(role))
    }))
    .filter(group => group.items.length > 0);
}