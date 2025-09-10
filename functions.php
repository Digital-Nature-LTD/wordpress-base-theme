<?php

/** Add appropriate theme styles for this page template */
function digital_nature_enqueue_styles(): void
{
    wp_enqueue_style('digital_nature_common_style', get_template_directory_uri().'/style-common.css', [], wp_get_theme()->get('Version'));
    wp_style_add_data('digital_nature_common_style', 'rtl', 'replace');
}
add_action('wp_enqueue_scripts', 'digital_nature_enqueue_styles');


/** Add theme styles for use in the editor */
function digital_nature_enqueue_block_editor_assets()
{
    wp_enqueue_style('digital_nature_common_style', get_template_directory_uri().'/style-common.css', [], wp_get_theme()->get('Version'));
    wp_style_add_data('digital_nature_common_style', 'rtl', 'replace');

    wp_enqueue_style('digital_nature_editor_styles', get_template_directory_uri().'/style-editor.css', [], wp_get_theme()->get('Version'));
    wp_style_add_data('digital_nature_editor_styles', 'rtl', 'replace');

	wp_enqueue_script('digital-nature-editor', get_template_directory_uri() . '/assets/public/js/editor/digital-nature-editor.js', ['wp-edit-post'], wp_get_theme()->get('Version'));
}
add_action('enqueue_block_editor_assets', 'digital_nature_enqueue_block_editor_assets');
