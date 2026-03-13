const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hardik Davera. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
