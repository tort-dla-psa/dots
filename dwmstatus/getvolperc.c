#include <alsa/asoundlib.h>

int
get_vol_perc(void)
{
	snd_mixer_t* handle;
	snd_mixer_elem_t* elem;
	snd_mixer_selem_id_t* sid;
	static const char* mix_name = "Master";
	static const char* card = "default";
	static int mix_index = 0;
	snd_mixer_selem_id_alloca(&sid);
	snd_mixer_selem_id_set_index(sid, mix_index);
	snd_mixer_selem_id_set_name(sid, mix_name);
	if ((snd_mixer_open(&handle, 0)) < 0) {
		return -1;
	}
	if ((snd_mixer_attach(handle, card)) < 0) {
		snd_mixer_close(handle);
		return -2;
	}
	if ((snd_mixer_selem_register(handle, NULL, NULL)) < 0) {
		snd_mixer_close(handle);
		return -3;
	}
	int ret = snd_mixer_load(handle);
	if (ret < 0) {
		snd_mixer_close(handle);
		return -4;
	}
	elem = snd_mixer_find_selem(handle, sid);
	if (!elem) {
		snd_mixer_close(handle);
	return -5;
	}

	long minv, maxv, outvol;

	snd_mixer_selem_get_playback_volume_range (elem, &minv, &maxv);

	if(snd_mixer_selem_get_playback_volume(elem, 0, &outvol) < 0) {
		snd_mixer_close(handle);
		return -6;
	}

	/* make the value bound to 100 */
	outvol -= minv;
	maxv -= minv;
	minv = 0;
	outvol = 100 * (outvol) / maxv; // make the value bound from 0 to 100

	snd_mixer_close(handle);
	return outvol;
}
