import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private metaService = inject(Meta);
  private titleService = inject(Title);
  private baseUrl = 'https://reachskytech.com';

  updateMetadata(metadata: SeoMetadata): void {
    // Update title
    this.titleService.setTitle(metadata.title);

    // Update/create meta description
    this.updateOrCreateMetaTag('name', 'description', metadata.description);

    // Update keywords if provided
    if (metadata.keywords) {
      this.updateOrCreateMetaTag('name', 'keywords', metadata.keywords);
    }

    // Update robots
    this.updateOrCreateMetaTag('name', 'robots', metadata.robots || 'index, follow');
    this.updateOrCreateMetaTag('name', 'googlebot', metadata.robots || 'index, follow');

    // Open Graph tags
    this.updateOrCreateMetaTag('property', 'og:type', metadata.ogType || 'website');
    this.updateOrCreateMetaTag('property', 'og:title', metadata.ogTitle || metadata.title);
    this.updateOrCreateMetaTag('property', 'og:description', metadata.ogDescription || metadata.description);
    this.updateOrCreateMetaTag('property', 'og:url', metadata.canonical);
    if (metadata.ogImage) {
      this.updateOrCreateMetaTag('property', 'og:image', metadata.ogImage);
      this.updateOrCreateMetaTag('property', 'og:image:alt', metadata.ogTitle || metadata.title);
    }

    // Twitter card tags
    this.updateOrCreateMetaTag('name', 'twitter:card', metadata.twitterCard || 'summary_large_image');
    this.updateOrCreateMetaTag('name', 'twitter:title', metadata.twitterTitle || metadata.title);
    this.updateOrCreateMetaTag('name', 'twitter:description', metadata.twitterDescription || metadata.description);
    if (metadata.twitterImage) {
      this.updateOrCreateMetaTag('name', 'twitter:image', metadata.twitterImage);
    }

    // Update canonical URL
    this.updateCanonical(metadata.canonical);
  }

  private updateOrCreateMetaTag(type: 'name' | 'property', name: string, content: string): void {
    const selector = type === 'name' ? `meta[name="${name}"]` : `meta[property="${name}"]`;
    const existingTag = document.querySelector(selector);

    if (existingTag) {
      existingTag.setAttribute('content', content);
    } else {
      const newTag = document.createElement('meta');
      if (type === 'name') {
        newTag.setAttribute('name', name);
      } else {
        newTag.setAttribute('property', name);
      }
      newTag.setAttribute('content', content);
      document.head.appendChild(newTag);
    }
  }

  private updateCanonical(url: string): void {
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = url;
  }

  addJsonLd(jsonLd: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }

  removeJsonLdScripts(): void {
    document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      if (!script.textContent?.includes('EducationalOrganization') && !script.textContent?.includes('WebSite')) {
        script.remove();
      }
    });
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
