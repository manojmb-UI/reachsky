import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  langAlternates?: { hrefLang: string; href: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://reachskytech.com';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  updateMetadata(metadata: SeoMetadata): void {
    // Update title
    this.title.setTitle(metadata.title);

    // Update meta description
    this.updateMetaTag('name', 'description', metadata.description);

    // Update keywords if provided
    if (metadata.keywords) {
      this.updateMetaTag('name', 'keywords', metadata.keywords);
    }

    // Update robots
    this.updateMetaTag('name', 'robots', metadata.robots || 'index, follow');

    // Open Graph tags
    this.updateMetaTag('property', 'og:title', metadata.ogTitle || metadata.title);
    this.updateMetaTag('property', 'og:description', metadata.ogDescription || metadata.description);
    this.updateMetaTag('property', 'og:url', metadata.canonical);
    this.updateMetaTag('property', 'og:type', metadata.ogType || 'website');
    if (metadata.ogImage) {
      this.updateMetaTag('property', 'og:image', metadata.ogImage);
      this.updateMetaTag('property', 'og:image:alt', metadata.ogTitle || metadata.title);
    }

    // Twitter card tags
    this.updateMetaTag('name', 'twitter:card', metadata.twitterCard || 'summary_large_image');
    this.updateMetaTag('name', 'twitter:title', metadata.twitterTitle || metadata.title);
    this.updateMetaTag('name', 'twitter:description', metadata.twitterDescription || metadata.description);
    if (metadata.twitterImage) {
      this.updateMetaTag('name', 'twitter:image', metadata.twitterImage);
    }

    // Canonical URL
    this.updateCanonical(metadata.canonical);

    // Language alternates if provided
    if (metadata.langAlternates && metadata.langAlternates.length > 0) {
      // Clear existing hreflang tags
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((tag) => tag.remove());

      metadata.langAlternates.forEach((alternate) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hrefLang = alternate.hrefLang;
        link.href = alternate.href;
        document.head.appendChild(link);
      });
    }
  }

  private updateMetaTag(type: 'name' | 'property', name: string, content: string): void {
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
    let canonicalTag = document.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute('href', url);
  }

  addJsonLd(jsonLd: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
