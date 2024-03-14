export function navigateToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}

export function navigateToExternalUrl(url: string): void {
    window.open(url, '_blank');
}
