<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep TanStack file routes and a shared application shell; the platform router must remain compatible with SSR.
- Isolate frontend demo state in typed mock services with browser-only persistence; real API replacement must not require rewriting marketplace views.
- Centralize marketplace matching, public field selection, and status policies in browser-safe library modules; UI and services must share the same rules.
- Define visual roles and layout classes in the global CSS theme; controls use the shared Button component.
