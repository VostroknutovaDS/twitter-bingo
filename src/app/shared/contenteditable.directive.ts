import { AfterViewInit, Directive, ElementRef, forwardRef, HostListener, OnDestroy, Renderer2 } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * @description
 * Adds contenteditable attribute true and ngModel behaviour to the host component 
 */
@Directive({
    selector: '[contenteditable][ngModel]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ContentEditableValueAccessor),
        multi: true
    }]
})
export class ContentEditableValueAccessor implements ControlValueAccessor, AfterViewInit, OnDestroy {
    private onTouched = () => { };
    private onChange = (value: string) => { };

    private observer!: MutationObserver;

    constructor(private readonly elementRef: ElementRef<Element>, private readonly renderer: Renderer2) {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', 'true');
    }

    ngAfterViewInit(): void {
        this.observer = new MutationObserver(() => { this.onChange(this.elementRef.nativeElement.innerHTML) });

        this.observer.observe(this.elementRef.nativeElement, { characterData: true, childList: true });
    }

    ngOnDestroy(): void {
        this.observer.disconnect();
    }

    @HostListener('input')
    onInput() {
        this.observer.disconnect();
        this.onChange(this.elementRef.nativeElement.innerHTML);
    }

    writeValue(value: string): void {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', value || '');
    }

    registerOnChange(onChange: (value: string) => void): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }
}