self.addEventListener('push',e=>{const d=e.data?e.data.json():{};
 e.waitUntil(self.registration.showNotification(d.title||'Brace',{body:d.body||'',tag:'brace'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();
 e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
