const mapping: Record<string, string> = {
  comments: 'comment',
  companies: 'company',
  designs: 'design',
  follows: 'follow',
  likes: 'like',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
