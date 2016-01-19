#include <pebble.h>
static Window *window;
static TextLayer *text_layer;

static void init(void) {
  window = window_create();
  window_stack_push(window, true);
  text_layer = text_layer_create(GRect(0, 0, 144, 168));
  text_layer_set_font(text_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
  text_layer_set_text(text_layer, "Open Config and See Log");
  layer_add_child(window_get_root_layer(window), text_layer_get_layer(text_layer));
}

int main(void) {
  init();
  app_event_loop();
  window_destroy(window);
}