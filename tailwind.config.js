/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // active le dark mode via la classe .dark
    theme: {
      extend: {
        colors: {
          border: "var(--color-border)",
          input: "var(--color-input)",
          ring: "var(--color-ring)",
          background: "var(--color-background)",
          foreground: "var(--color-foreground)",
          primary: {
            DEFAULT: "var(--color-primary)",
            foreground: "var(--color-primary-foreground)",
          },
          secondary: {
            DEFAULT: "var(--color-secondary)",
            foreground: "var(--color-secondary-foreground)",
          },
          muted: {
            DEFAULT: "var(--color-muted)",
            foreground: "var(--color-muted-foreground)",
          },
          accent: {
            DEFAULT: "var(--color-accent)",
            foreground: "var(--color-accent-foreground)",
          },
          destructive: "var(--color-destructive)",
          card: {
            DEFAULT: "var(--color-card)",
            foreground: "var(--color-card-foreground)",
          },
          popover: {
            DEFAULT: "var(--color-popover)",
            foreground: "var(--color-popover-foreground)",
          },
          sidebar: {
            DEFAULT: "var(--color-sidebar)",
            foreground: "var(--color-sidebar-foreground)",
            primary: "var(--color-sidebar-primary)",
            primaryForeground: "var(--color-sidebar-primary-foreground)",
            accent: "var(--color-sidebar-accent)",
            accentForeground: "var(--color-sidebar-accent-foreground)",
            border: "var(--color-sidebar-border)",
            ring: "var(--color-sidebar-ring)",
          },
          chart: {
            1: "var(--color-chart-1)",
            2: "var(--color-chart-2)",
            3: "var(--color-chart-3)",
            4: "var(--color-chart-4)",
            5: "var(--color-chart-5)",
          },
        },
        borderRadius: {
          sm: "var(--radius-sm)",
          md: "var(--radius-md)",
          lg: "var(--radius-lg)",
          xl: "var(--radius-xl)",
        },
      },
    },
    plugins: [
      require('tailwindcss-animate'), // si tu utilises la lib tailwind-animate
    ],
  }
  