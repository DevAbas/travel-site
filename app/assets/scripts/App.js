import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const revealScrollFeatures = new RevealOnScroll($('.feature-item'),'85%');
const revealScrollTestimonials = new RevealOnScroll($('.testimonial'), '90%');