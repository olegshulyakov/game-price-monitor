declare module "playstation" {
    export interface GameContentType {
        name: string;
        count: number;
        key: string;
    }

    export interface SubtitleLang {
        name: string;
        count: number;
        key: string;
    }

    export interface ReleaseDate {
        name: string;
        count: number;
        key: string;
    }

    export interface GameDemo {
        name: string;
        count: number;
        key: string;
    }

    export interface Price {
        name: string;
        count: number;
        key: string;
    }

    export interface Genre {
        name: string;
        count: number;
        key: string;
    }

    export interface TopCategory {
        name: string;
        count: number;
        key: string;
    }

    export interface VoiceLang {
        name: string;
        count: number;
        key: string;
    }

    export interface GameType {
        name: string;
        count: number;
        key: string;
    }

    export interface Relationship {
        name: string;
        count: number;
        key: string;
    }

    export interface Platform {
        name: string;
        count: number;
        key: string;
    }

    export interface Facets {
        game_content_type: GameContentType[];
        subtitle_lang: SubtitleLang[];
        release_date: ReleaseDate[];
        game_demo: GameDemo[];
        price: Price[];
        genre: Genre[];
        top_category: TopCategory[];
        voice_lang: VoiceLang[];
        game_type: GameType[];
        relationship: Relationship[];
        platform: Platform[];
    }

    export interface Attributes {
        facets: Facets;
        next: any[];
    }

    export interface Eligibility {
        id: string;
        operand: string;
        operator: string;
        rightOperand?: any;
        name: string;
        description?: any;
        entitlement_type?: any;
        drms: any[];
    }

    export interface MediaProp {}

    export interface Drm {
        drm_category_type: number;
        id: string;
        is_streamable: number;
        media_prop: MediaProp;
        size: number;
        type: number;
    }

    export interface Metadata {
        voiceLanguageCode: string[];
        subtitleLanguageCode: string[];
        packageSubType: string[];
    }

    export interface Package {
        platformId: number;
        platformName: string;
        size: any;
    }

    export interface Entitlement {
        description?: any;
        drms: Drm[];
        duration: number;
        durationOverrideTypeId?: any;
        exp_after_first_use: number;
        feature_type_id: number;
        id: string;
        license_type: number;
        metadata: Metadata;
        name: string;
        packageType: string;
        packages: Package[];
        preorder_placeholder_flag: boolean;
        size: number;
        subType: number;
        subtitle_language_codes: string[];
        type: number;
        use_count: number;
        voice_language_codes: string[];
    }

    export interface Reward {
        id: string;
        entitlement_id: string;
        service_provider_id: string;
        discount: number;
        price: number;
        reward_type: number;
        display_price: string;
        name: string;
        description: string;
        isPlus: boolean;
        rewardSourceId: number;
        end_date: Date;
        reward_source_type_id: number;
        start_date: Date;
    }

    export interface DefaultSku {
        amortizeFlag: boolean;
        bundleExclusiveFlag: boolean;
        chargeImmediatelyFlag: boolean;
        charge_type_id: number;
        credit_card_required_flag: number;
        defaultSku: boolean;
        display_price: string;
        eligibilities: Eligibility[];
        end_date: Date;
        entitlements: Entitlement[];
        id: string;
        is_original: boolean;
        name: string;
        platforms: number[];
        playability_date: Date;
        price: number;
        rewards: Reward[];
        seasonPassExclusiveFlag: boolean;
        skuAvailabilityOverrideFlag: boolean;
        sku_type: number;
        type: string;
        wallet_charge_date: Date;
    }

    export interface GameContentTypesList {
        name: string;
        key: string;
    }

    export interface Image {
        type: number;
        url: string;
    }

    export interface Link {
        bucket: string;
        bundleChildTypeId: number;
        cloud_only_platform: string[];
        container_type: string;
        content_type: string;
        default_sku: DefaultSku;
        gameContentTypesList: GameContentTypesList[];
        game_contentType: string;
        id: string;
        images: Image[];
        name: string;
        playable_platform: string[];
        release_date: Date;
        restricted: boolean;
        revision: number;
        short_name: string;
        timestamp: any;
        top_category: string;
        url: string;
        provider_name: string;
        parent_name: string;
    }

    export interface Metadata2 {}

    export interface SceneLayout {
        id: number;
        catalogEntryId: string;
        storeFrontId: number;
        templateId: number;
        subScenes: any[];
        storeTypeId: number;
    }

    export interface Widget {
        name?: any;
        id: number;
        tag?: any;
        width?: any;
        height?: any;
        offsetX?: any;
        offsetY?: any;
        order: string;
        locationWidgetId: number;
        nsx_space?: any;
    }

    export interface Location {
        id: number;
        name?: any;
        width: string;
        height: string;
        offsetX: string;
        offsetY: string;
        widgets: Widget[];
    }

    export interface Extra {
        templateExtraId: number;
        width: number;
        height: number;
        name?: any;
        key: string;
    }

    export interface TemplateDef {
        name: string;
        id: number;
        storeTypeId: number;
        imageUrl?: any;
        locations: Location[];
        extras: Extra[];
    }

    export interface PlaystationObject {
        age_limit: number;
        attributes: Attributes;
        container_type: string;
        content_origin: number;
        dob_required: boolean;
        id: string;
        images: any[];
        links: Link[];
        long_desc: string;
        metadata: Metadata2;
        name: string;
        promomedia: any[];
        restricted: boolean;
        revision: number;
        scene_layout: SceneLayout;
        size: number;
        sku_links: any[];
        sort_default: string;
        sort_default_direction: string;
        start: number;
        template_def: TemplateDef;
        timestamp: number;
        total_results: number;
    }
}
