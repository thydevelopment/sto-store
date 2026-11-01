/* =========================================================
   footer.js
   Injects the shared footer into #footer on every page.
   Edit the footer ONLY here — all pages update automatically.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  injectFooter();
});

function injectFooter() {
  const host = document.getElementById("footer");
  if (!host) return; // page has no footer placeholder

  host.innerHTML = `
    <footer style="background:#020617;color:#94a3b8;font-size:14px;">
      <div style="max-width:72rem;margin:0 auto;padding:40px 16px;">

        <!-- Top grid -->
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:32px;">

          <!-- Brand -->
          <div style="grid-column:span 2;">
            <p style="color:#fff;font-weight:700;font-size:18px;margin:0 0 8px 0;">STO Store</p>
            <p style="color:#64748b;font-size:12px;line-height:1.5;margin:0 0 16px 0;">
              Thoughtfully made essentials for people who care about quality.
            </p>
            <div style="display:flex;gap:12px;">
              <a href="#" aria-label="Instagram" style="color:#94a3b8;text-decoration:none;">Instagram</a>
              <a href="#" aria-label="Twitter"   style="color:#94a3b8;text-decoration:none;">Twitter</a>
              <a href="#" aria-label="Facebook"  style="color:#94a3b8;text-decoration:none;">Facebook</a>
            </div>
          </div>

          <!-- Shop -->
          <div>
            <p style="color:#fff;font-weight:600;margin:0 0 8px 0;">Shop</p>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <li><a href="shop.html"        style="color:#94a3b8;text-decoration:none;">All Products</a></li>
              <li><a href="newArrivals.html" style="color:#94a3b8;text-decoration:none;">New Arrivals</a></li>
              <li><a href="collections.html" style="color:#94a3b8;text-decoration:none;">Collections</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <p style="color:#fff;font-weight:600;margin:0 0 8px 0;">Company</p>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <li><a href="our-story.html" style="color:#94a3b8;text-decoration:none;">Our Story</a></li>
              <li><a href="contact.html"   style="color:#94a3b8;text-decoration:none;">Contact</a></li>
              <li><a href="login.html"     style="color:#94a3b8;text-decoration:none;">Sign in</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <p style="color:#fff;font-weight:600;margin:0 0 8px 0;">Support</p>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <li><a href="#" style="color:#94a3b8;text-decoration:none;">Shipping</a></li>
              <li><a href="#" style="color:#94a3b8;text-decoration:none;">Returns</a></li>
              <li><a href="#" style="color:#94a3b8;text-decoration:none;">FAQ</a></li>
            </ul>
          </div>

          <!-- Newsletter mini -->
          <div>
            <p style="color:#fff;font-weight:600;margin:0 0 8px 0;">Stay in touch</p>
            <p style="color:#64748b;font-size:12px;line-height:1.5;margin:0 0 12px 0;">
              Get new drops in your inbox.
            </p>
            <form onsubmit="event.preventDefault(); alert('Subscribed (demo)');"
                  style="display:flex;gap:6px;">
              <input type="email" required placeholder="you@example.com"
                     style="flex:1;min-width:0;padding:8px 10px;border-radius:8px;border:none;font-size:12px;outline:none;">
              <button type="submit"
                      style="background:#6366f1;color:#fff;border:none;padding:8px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">
                Join
              </button>
            </form>
          </div>
        </div>

        <!-- Bottom bar -->
        <div style="border-top:1px solid #1e293b;padding-top:16px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;font-size:12px;text-align:center;">
          <p style="margin:0;">© 2026 STO-Store. All rights reserved.</p>
          <p style="margin:0;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
            <a href="#" style="color:#94a3b8;text-decoration:none;">Privacy</a>
            <a href="#" style="color:#94a3b8;text-decoration:none;">Terms</a>
            <a href="#" style="color:#94a3b8;text-decoration:none;">Cookies</a>
          </p>
        </div>

      </div>
    </footer>
  `;
}