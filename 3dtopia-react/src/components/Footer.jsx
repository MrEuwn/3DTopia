export default function Footer({ withHeart = false }) {
  return (
    <footer className="bg-surface-container w-full py-section-gap-md px-gutter border-t border-outline-variant/30 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-base max-w-container-max mx-auto text-center md:text-left">
        <div className="font-display-lg text-headline-md text-primary mb-4 md:mb-0">3DTopia</div>
        <div className="font-label-md text-label-md text-primary max-w-xs">
          {withHeart ? (
            <>
              creative 3D printing studio creating unique pieces, custom projects, collectibles and more.
            </>
          ) : (
            <>&copy; 2024 3DTopia Studio. Crafted with joy and precision.</>
          )}
        </div>
        <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0 font-label-md text-label-md">
          <a className="link-underline text-on-surface-variant" href="#">Privacy Policy</a>
          <a className="link-underline text-on-surface-variant" href="#">Terms of Service</a>
          <a className="link-underline text-on-surface-variant" href="#">Shipping Info</a>
          <a className="link-underline text-on-surface-variant" href="#">FAQ</a>
        </nav>
      </div>
      {withHeart && (
        <p className="text-center text-label-sm text-on-surface-variant/60 mt-8">
          &copy; 2024 3DTopia Studio. Crafted with <span className="heart-pulse inline-block">&#10084;&#65039;</span> and precision.
        </p>
      )}
    </footer>
  )
}
